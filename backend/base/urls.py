from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('normalTemp', views.NormalTemp, basename='normalTemp')
router.register('feverTemp', views.FeverTemp, basename='feverTemp')
router.register('atHome', views.AtHome, basename='atHome')
router.register('outHome', views.OutHome, basename='atHome')
router.register('petplace', views.Petplace, basename='petplace')

urlpatterns = [
    path('', include(router.urls)),
]
