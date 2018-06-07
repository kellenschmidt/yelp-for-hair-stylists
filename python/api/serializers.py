from rest_framework import serializers
from .models import Review, Store, Worker

class StoreSerializer(serializers.ModelSerializer):

	class Meta:
		model = Store
		fields = '__all__'

class ReviewSerializer(serializers.ModelSerializer):

	class Meta:
		model = Review
		fields = '__all__'

class WorkerSerializer(serializers.ModelSerializer):

	class Meta:
		model = Worker
		fields = '__all__'