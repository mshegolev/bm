from django.urls import include

from django.contrib import admin
from django.contrib.auth import views
from django.urls import path
import shower.views

admin.autodiscover()

# To add a new path, first import the app:
# import blog
#
# Then add the new path:
# path('blog/', blog.urls, name="blog")
#
# Learn more here: https://docs.djangoproject.com/en/2.1/topics/http/urls/

urlpatterns = [
    path("", shower.views.index, name="index"),
    path("db/", shower.views.db, name="db"),
    path("admin/", admin.site.urls),
    # path('accounts/login/', views.LoginView.as_view(), name='login'),
    path('accounts/', include('django.contrib.auth.urls')),
    path('accounts/logout/', views.LoginView.as_view(), name='logout'),
    path('tradingview/', shower.views.trading_view, name="tradingview"),
]
