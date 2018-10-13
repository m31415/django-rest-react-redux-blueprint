from django.conf.urls import include
from rest_framework import routers
from backendapp import views
from django.contrib import admin
from django.urls import path

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path('admin/', admin.site.urls),
]
