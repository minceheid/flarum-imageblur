<?php
namespace Minceheid\ImageBlur;

use Flarum\Extend;
use Flarum\Locale\Translator;
use Flarum\Post\Post;
use Illuminate\Support\Arr;
use s9e\TextFormatter\Utils;

return [
    (new Extend\Frontend('forum')) ->js(__DIR__.'/js/dist/forum.js'),
    (new Extend\Formatter())
        ->render(function ($renderer, $context, $xml) {
            // This seems like a horrible hack, but for now I can't immediately see how to
            // set the IMG class in the back end, but I can set the title. The front end will then
            // find the title, and set the class accordingly :-/
            return Utils::replaceAttributes($xml, 'IMG', function (array $attributes) use ($context): array {
                $attributes['title'] = 'flarum-img';
                return $attributes;
            });
        }),

];
