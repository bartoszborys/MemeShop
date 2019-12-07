from django.urls import path
from .views.OrdersView import OrdersView

urlpatterns = [
    path('', OrdersView.as_view(), name="")
]