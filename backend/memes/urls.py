from django.urls import path
from .views.Memes import MemesView
from .views.MemeDetails import MemeDetailsView
from .views.MemesByIds import MemesByIdsView

urlpatterns = [
    path('', MemesView.as_view(), name=""),
    path('<int:meme_id>', MemeDetailsView.as_view(), name="meme_id"),
    path('byIds', MemesByIdsView.as_view(), name="meme_id_picture"),
]