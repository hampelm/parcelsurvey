import logging

from django.shortcuts import render_to_response
from django.contrib.gis.geos import Point
from django.contrib.gis.measure import Distance
from django.contrib.gis.shortcuts import render_to_kml

from geopy import geocoders

from core import models

# NOTE: Under load, this strategy is likely to max out your Google API Key. 
# Where possible, geocode addresses using client side calls.
GEOCODER = geocoders.Google()
def index(request):
  #  form = SearchForm()
        
    return render_to_response('home.html', {  })
    