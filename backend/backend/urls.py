from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
from rest_framework_jwt.views import obtain_jwt_token
from rest_framework_jwt.views import refresh_jwt_token
from rest_framework_jwt.views import verify_jwt_token
from rest_framework_swagger.views import get_swagger_view

schema_view = get_swagger_view(title='Meme Shop API')

urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'^api/authorization/', include('authorization.urls')),
    url(r'^api/memes/', include('memes.urls')),

    url(r'^auth-jwt-refresh/', refresh_jwt_token),
    url(r'^auth-jwt-verify/', verify_jwt_token),
    url(r'^api-token-auth/', obtain_jwt_token),
    url(r'^$', schema_view)
]
