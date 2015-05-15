from django.contrib import sitemaps
from django.core.urlresolvers import reverse

class StaticViewSitemap(sitemaps.Sitemap):
	priority = 0.5
	changefreq = 'daily'

	def items(self):
		return ['home', 'exhibitions', 'learn', 'gallery', 'team', 'faq', 'contact', 'resources']

	def location(self, item):
		return reverse(item)