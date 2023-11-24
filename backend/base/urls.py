from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("event-stream", views.event_stream, name="e"),
    # path('ssetemp', views.SSEtemp, name='SSEtemp'),
    # path('sse/loca', views.SSEloca, name='SSEloca'),
]