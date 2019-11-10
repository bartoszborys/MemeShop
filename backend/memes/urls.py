from django.urls import path
from .views.Memes import MemesView

urlpatterns = [
    path('', MemesView.as_view(), name="")
]