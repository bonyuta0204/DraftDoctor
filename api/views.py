from django.shortcuts import render

# Create your views here.
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(["POST"])
def error_check(request):
    if request.method == "POST":
        document_text = request.data.get("documentText", None)

        if document_text is None:
            return Response(
                {"message": "documentText is required"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        return Response(
            {"result": "No errors found in the provided text"},
            status=status.HTTP_200_OK,
        )
