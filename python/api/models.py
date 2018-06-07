# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

class Review(models.Model):
	comment = models.CharField(max_length=1000)
	conversation = models.IntegerField()
	title = models.CharField(max_length=100)
	style = models.IntegerField()
	satisfaction = models.IntegerField()
	worker_id = models.IntegerField()
	age = models.IntegerField()
	gender = models.IntegerField()
	price = models.IntegerField()

	def __str__(self):
		return self.id

class Worker(models.Model):
	store_id = models.CharField(max_length=200)
	name = models.CharField(max_length=200)

	def __str__(self):
		return self.id

class Store(models.Model):
	store_id = models.CharField(max_length=200)
	phone_number = models.CharField(max_length=200)

	def __str__(self):
		return self.store_id