from django.urls import path, include
from rest_framework import routers

from api import views

app_name = "api"

router = routers.SimpleRouter()

urlpatterns = [
    path("error-check", views.error_check, name="error-check"),
    path("", include(router.urls)),
]
