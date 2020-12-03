from django.shortcuts import render
from django.http import HttpResponse
import requests
import os
from django.contrib.auth.decorators import login_required

from stayer.tfi_wrapper import TfiWrapper
from .models import Greeting


@login_required(login_url='/accounts/login/')
def index(request):
    if request.user.is_authenticated:
        times = int(os.environ.get('TIMES', 3))
        message = "shower " * times
    else:
        message = 'Пользователь не авторизован'
    return render(request, "index.html", {"message": message,
                                          "username": request.user.username})


@login_required(login_url='/accounts/login/')
def trading_view(request):
    # graph = TfiWrapper().get_smoke_test()
    graph = TfiWrapper().get_accounts()
    print(graph)
    return render(request, "trading_view.html", {"graph": graph.json()})



@login_required(login_url='/accounts/login/')
def db(request):
    greeting = Greeting()
    greeting.save()

    greetings = Greeting.objects.all()

    return render(request, "db.html", {"greetings": greetings})


@login_required(login_url='/accounts/login/')
def logout(request):
    return index(request)
