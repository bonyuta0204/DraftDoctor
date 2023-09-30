# ベースイメージを指定
FROM python:3.10 AS build

# ワーキングディレクトリを設定
WORKDIR /app

# poetryをインストール
RUN pip install poetry

# 依存関係をコピーしてインストール
COPY pyproject.toml poetry.lock ./
RUN poetry export -f requirements.txt --output requirements.txt
RUN pip install --no-cache-dir -r requirements.txt


# 実行用のイメージを指定
FROM python:3.10-slim AS run

# Node.js と Yarn のインストール
RUN apt-get update \
  && apt-get install -y curl \
  && curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
  && apt-get install -y nodejs \
  && curl -o- -L https://yarnpkg.com/install.sh | bash

ENV PATH /root/.yarn/bin:$PATH

WORKDIR /app
ENV DJANGO_SETTINGS_MODULE=draft_doctor.settings.production

# 依存関係をビルド用イメージからコピー
COPY --from=build /usr/local/lib/python3.10/site-packages /usr/local/lib/python3.10/site-packages
COPY --from=build /usr/local/bin/gunicorn /usr/local/bin/gunicorn

# アプリケーションのソースコードをコピー
COPY . .

RUN yarn install

RUN yarn build

RUN python manage.py collectstatic

# ポートを開放
EXPOSE 8000

CMD ["gunicorn", "draft_doctor.wsgi:application", "--bind", "0.0.0.0:8000"]
