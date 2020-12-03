from django.urls import path, include

from django.contrib import admin
from django.contrib.auth import views
from django.urls import path

admin.autodiscover()

import hello.views

# To add a new path, first import the app:
# import blog
#
# Then add the new path:
# path('blog/', blog.urls, name="blog")
#
# Learn more here: https://docs.djangoproject.com/en/2.1/topics/http/urls/

urlpatterns = [
    path("", hello.views.index, name="index"),
    path("db/", hello.views.db, name="db"),
    path("admin/", admin.site.urls),
    # path('accounts/login/', views.LoginView.as_view(), name='login'),
    path('accounts/', include('django.contrib.auth.urls')),
    path('accounts/logout/', views.LoginView.as_view(), name='logout'),
    path('tradingview/', hello.views.tradingview, name="tradingview"),
]
