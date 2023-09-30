# local.py
from .base import *

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False
DJANGO_VITE_DEV_MODE = False
ALLOWED_HOSTS = ['localhost', '127.0.0.1']

LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    # ログ出力フォーマットの設定
    'formatters': {
        'production': {
            'format': '%(asctime)s [%(levelname)s] %(process)d %(thread)d '
                      '%(pathname)s:%(lineno)d %(message)s'
        },
    },
    # ハンドラの設定
    'handlers': {
        'console': {
            'class': 'logging.StreamHandler',
        },
    },
    # ロガーの設定
    'loggers': {
        # 自分で追加したアプリケーション全般のログを拾うロガー
        '': {
            'handlers': ['console'],
            'level': 'INFO',
            'propagate': False,
        },
        # Django自身が出力するログ全般を拾うロガー
        'django': {
            'handlers': ['console'],
            'level': 'INFO',
            'propagate': False,
        },
    },
}
