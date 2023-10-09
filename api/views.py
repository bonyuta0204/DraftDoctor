from django.shortcuts import render

# Create your views here.
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from langchain.chat_models import ChatOpenAI
from langchain.schema import AIMessage, HumanMessage, SystemMessage
from langchain.prompts import PromptTemplate


from typing import List
from langchain.pydantic_v1 import BaseModel, Field
from langchain.output_parsers import PydanticOutputParser


class CheckResult(BaseModel):
    original: str = Field(description="original part of user's input")
    problem: str = Field(description="problem for original part")
    revised: str = Field(description="revised part of user's input")


class LanguageResult(BaseModel):
    language: str = Field(description="language of user's input")
    results: List[CheckResult] = Field(description="results of error check")


@api_view(["POST"])
def error_check(request):
    if request.method == "POST":
        document_text = request.data.get("documentText", None)

        if document_text is None:
            return Response(
                {"message": "documentText is required"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        llm = ChatOpenAI(temperature=0, model_name="gpt-3.5-turbo", verbose=True)

        parser = PydanticOutputParser(pydantic_object=LanguageResult)

        system_prompt = PromptTemplate(
            template="""
                You are an expert in writing.
                Please perform a detailed review of the user's input.

                For the user's writings, please meticulously check for grammatical errors, inappropriate expressions, and unclear phrases.

                Please present the output in the following format.

                {format_instructions}

                Please conform to following rules:
                1. "original" should be much the same as the user's input.
                2. You should separate original writing into small parts and describe the problem for each part.
                3. problem should be very specific and clear. You SHOUD NOT say "this part is unclear". You SHOULD say "this part is unclear because of ...". You should explain WHY the part is problematic.
                4. problem should be point out in user's input language.
                5. you have to skip a part if you can not find any problem.
                6. "revised" should be grammatically correct and clear.
                7. you should only export defined format. You SHOUD NOT add any other information.
                """,
            partial_variables={"format_instructions": parser.get_format_instructions()},
            input_variables=[],
        )

        messages = [
            SystemMessage(
                content=system_prompt.format_prompt().to_string(),
            ),
            HumanMessage(content=document_text),
        ]

        result = llm(messages)

        return Response(
            {"result": result.content},
            status=status.HTTP_200_OK,
        )
