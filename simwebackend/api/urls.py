from django.urls import path
from . import views

urlpatterns = [
    path('get-data/', views.get_data, name='get_data'),
    path('get-more-data/', views.get_more_data, name='get_more_data'),
]
