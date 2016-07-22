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
    file_name=f.split('.')[0]
    cur=open(f,'r')
    cur_json=json.load(cur)

#extract info
    id=file_name
    condition=cur_json["data"]["data"]["condition"]
    type=cur_json["data"]["data"]["tri_type"]
    sound_dist=cur_json["data"]["data"]["sou_dist"]
    concept_dist=cur_json["data"]["data"]["con_dist"]
    answer=cur_json["data"]["data"]["answer"]
    RT=cur_json["data"]["data"]["rt"]
    side=cur_json["data"]["sideBinding"]["left"]

    trials=cur_json["data"]["data"]["tri_number"]
    for i in range(len(trials)):
        if sound_dist[i]=='':
	    sound_dist[i]='NA'
        if concept_dist[i]=='':
	    concept_dist[i]='NA'

        print id, condition[i], type[i], sound_dist[i], concept_dist[i], answer[i], RT[i], side

    
