from django.urls import path
from .views.CurrentUserBoughtMemesView import CurrentUserBoughtMemesView
from .views.CurrentUserExposedMemesView import CurrentUserExposedMemesView
from .views.OtherUserExposedMemesView import OtherUserExposedMemesView

urlpatterns = [
    path('current/memes/exposed', CurrentUserExposedMemesView.as_view(), name=""),
    path('current/memes/bought', CurrentUserBoughtMemesView.as_view(), name=""),
    path('<int:user_id>/memes/exposed', OtherUserExposedMemesView.as_view(), name="")
]