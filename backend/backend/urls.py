from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
from rest_framework_jwt.views import obtain_jwt_token
from rest_framework_jwt.views import refresh_jwt_token
from rest_framework_jwt.views import verify_jwt_token
from rest_framework_swagger.views import get_swagger_view
from django.conf import settings
from django.conf.urls.static import static

schema_view = get_swagger_view(title='Meme Shop API')

urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'^api/authorization/', include('authorization.urls')),
    url(r'^api/memes/', include('memes.urls')),
    url(r'^api/orders/', include('orders.urls')),
    url(r'^api/users/', include('users.urls')),

    url(r'^auth-jwt-refresh/', refresh_jwt_token),
    url(r'^auth-jwt-verify/', verify_jwt_token),
    url(r'^api-token-auth/', obtain_jwt_token),
    url(r'^$', schema_view)
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
