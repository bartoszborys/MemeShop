from django.urls import path

from .views_folder.SignUpView import SignUpView

urlpatterns = [
    path('signup', SignUpView.as_view(), name="signup"),
    # path('signin', views.signin, name='signin'),
]