from django.urls import path
from .views.Memes import MemesView
from .views.MemeDetails import MemeDetailsView

urlpatterns = [
    path('', MemesView.as_view(), name=""),
    path('<int:meme_id>', MemeDetailsView.as_view(), name="meme_id")
]