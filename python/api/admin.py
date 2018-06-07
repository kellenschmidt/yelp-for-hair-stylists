# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin
from .models import Review, Worker, Store

admin.site.register(Store)
admin.site.register(Review)
admin.site.register(Worker)
