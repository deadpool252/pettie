from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path('event-stream/', views.event_stream, name='event-stream'),
]