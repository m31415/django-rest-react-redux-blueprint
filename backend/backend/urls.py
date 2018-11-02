from django.conf.urls import include
from rest_framework import routers
from django.contrib import admin
from django.urls import path
from backendapp import views as backendapp_views
from frontendapp import urls as frontendapp_urls
from rest_framework.authtoken import views as rest_views

router = routers.DefaultRouter()
router.register(r'users', backendapp_views.UserViewSet)

urlpatterns = [
    path('', include(frontendapp_urls)),
    path('api/', include(router.urls)),
    path('api/login/', rest_views.obtain_auth_token),
    path('admin/', admin.site.urls),
]
