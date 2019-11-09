from django.urls import path

from .views.SignUpView import SignUpView
from .views.SignInView import SignInView


urlpatterns = [
    path('signup', SignUpView.as_view(), name="signup"),
    path('signin', SignInView.as_view(), name="signin")
]