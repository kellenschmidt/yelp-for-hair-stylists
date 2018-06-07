# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Worker, Store, Review
from .serializers import WorkerSerializer, StoreSerializer, ReviewSerializer

#obtain a list of workers from a certain store
class WorkerList(APIView):
	
	def get(self, request, store_id=None):
		workers = Worker.objects.filter(store_id=store_id)
		serializer = WorkerSerializer(workers, many=True)

		return Response(serializer.data)		
		#request.data

	def post(self):
		pass

class ReviewList(APIView):

	def get(self, request, worker_id=None):
		reviews = Review.objects.filter(id=worker_id)
		serializer = ReviewSerializer(reviews, many=True)
		return Response(serializer.data)

	def post(self):
		pass

class CreateReview(APIView):

	def post(self, request):

		data = request.data
		
		#id = data['id']
		style = data['style']
		title = data['title']
		comment = data['comment']
		conversation = data['conversation']
		satisfaction = data['satisfaction']
		worker_id = data['worker_id']
		age = data['age']
		gender = data['gender']
		price = data['price']

		Review.objects.create(style=style, title=title, comment=comment, conversation=conversation, satisfaction=satisfaction, worker_id=worker_id, age=age, gender=gender, price=price)

		return Response(200)

class CreateWorker(APIView):

	def post(self, request):

		data = request.data

		store_id = data['store_id']
		name = data['name']

		Worker.objects.create(store_id=store_id, name=name)

		return Response(200)


















