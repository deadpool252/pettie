from django.apps import AppConfig
import os

class BaseConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'base'

    # def ready(self):
    #     from . import updater
    #     if os.environ.get('RUN_MAIN'):
    #         updater.start()
