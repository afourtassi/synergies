import os
import sys
import shutil
import numpy
from optparse import OptionParser
import random
from math import *
import glob
import pprint
import json


myFiles= glob.glob("*json")
for f in myFiles:
    cur=open(f,'r')
    cur_json=json.load(cur)

#extract info
    id=cur_json["WorkerId"]
    condition=cur_json["answers"]["data"]["data"]["condition"]
    type=cur_json["answers"]["data"]["data"]["tri_type"]
    session=cur_json["answers"]["data"]["data"]["session"]
    sound_dist=cur_json["answers"]["data"]["data"]["sou_dist"]
    concept_dist=cur_json["answers"]["data"]["data"]["con_dist"]
    answer=cur_json["answers"]["data"]["data"]["answer"]
    RT=cur_json["answers"]["data"]["data"]["rt"]

    trials=cur_json["answers"]["data"]["data"]["tri_number"]
    for i in range(len(trials)):
        if sound_dist[i]=='':
	    sound_dist[i]='NA'
        if concept_dist[i]=='':
	    concept_dist[i]='NA'

        print id, condition[i], type[i], session[i], sound_dist[i], concept_dist[i], answer[i], RT[i]

    
