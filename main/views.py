from django.shortcuts import render

def home(request):
	return render(request, 'home.html')
	
def exhibitions(request):
	return render(request, 'exhibitions.html')
	
def learn(request):
	return render(request, 'learn.html')
	
def visit(request):
	return render(request, 'visit.html')
	
def gallery(request):
	return render(request, 'gallery.html')
	
def team(request):
	return render(request, 'team.html')
	
def faq(request):
	return render(request, 'faq.html')
	
def contact(request):
	return render(request, 'contact.html')