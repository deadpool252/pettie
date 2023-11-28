from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("event-stream", views.event_stream, name="e"),
    #path("getLastTemp", views.getLastTemp, name="getLastTemp")
    path('ssetemp', views.SSEtemp, name='SSEtemp'),
    path('sseloca', views.SSEloca, name='SSEloca'),
]