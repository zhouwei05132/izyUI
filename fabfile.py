# -*- coding: utf-8 -*
from fabric.decorators import runs_once
from fabric.api import local
import json
import re

@runs_once
def bump(app_env):
    with open('package.json') as fp:
        packs = json.load(fp)
        version = packs['version']
        if app_env == "dist":
            new_version = re.sub(r'(\d+)$', increase, version)
            local('git checkout --track origin/master')
            local("yarn version --new-version %s" % new_version)
        else:
            if ('-beta.' in version):
                new_version = re.sub(r'(\d+)$', increase, version)
            else:
                new_version = re.sub(r'(\d+)$', increase, version) + '-beta.0'
            local('git checkout --track origin/release/test')
            local("yarn version --new-version %s" % new_version)
        local('git push')
        local('npm publish')

def increase(m):
    return str(int(m.group(1).title()) + 1)