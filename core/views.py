from django.shortcuts import render

# Create your views here.
from django.views.generic import TemplateView
class SplashView(TemplateView):
	template_name = "index.html"