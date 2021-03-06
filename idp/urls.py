"""idp URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.8/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add an import:  from blog import urls as blog_urls
    2. Add a URL to urlpatterns:  url(r'^blog/', include(blog_urls))
"""
from django.conf.urls import include, url
from main import views
from django.contrib.sitemaps.views import sitemap
from .sitemaps import StaticViewSitemap

sitemaps = {
	'static': StaticViewSitemap,
}

urlpatterns = [
    url(r'^$', views.home, name='home'),
    url(r'^exhibits/$', views.exhibits, name='exhibits'),
    url(r'^learn/$', views.learn, name='learn'),
    url(r'^visit/$', views.visit, name='visit'),
    url(r'^gallery/$', views.gallery, name='gallery'),
    url(r'^team/$', views.team, name='team'),
    url(r'^faq/$', views.faq, name='faq'),
    url(r'^contact/$', views.contact, name='contact'),
    url(r'^resources/$', views.resources, name='resources'),
	
    url(r'^contact/send/$', views.contact_api),
	
	url(r'^sitemap\.xml$', sitemap, {'sitemaps': sitemaps},
		name='django.contrib.sitemaps.views.sitemap')
]
