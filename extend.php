<?php

namespace Minceheid\ImageBlur;

use Flarum\Extend;
use Flarum\Locale\Translator;
use Flarum\Post\Post;
use Illuminate\Support\Arr;
use s9e\TextFormatter\Utils;


return [
    (new Extend\Frontend('forum')) ->js(__DIR__.'/js/dist/forum.js'),
];
