from django.shortcuts import render
from django.views.decorators.cache import cache_page
from main.contact import contact as send_message
from django.http import HttpResponse
import json

@cache_page(60 * 15)
def home(request):
	return render(request, 'home.html')

@cache_page(60 * 15)	
def exhibitions(request):
	return render(request, 'exhibitions.html')

@cache_page(60 * 15)
def learn(request):
	return render(request, 'learn.html')
	
@cache_page(60 * 15)
def visit(request):
	return render(request, 'visit.html')
	
@cache_page(60 * 15)
def gallery(request):
	return render(request, 'gallery.html')
	
@cache_page(60 * 15)
def team(request):
	return render(request, 'team.html')
	
@cache_page(60 * 15)
def faq(request):
	return render(request, 'faq.html')
	
@cache_page(60 * 15)
def contact(request):
	return render(request, 'contact.html')
	
@cache_page(60 * 15)
def resources(request):
	return render(request, 'resources.html')
	
def contact_api(request):
	response = send_message(request)
	return HttpResponse(json.dumps(response), content_type='application/json')