# flarum-imageblur
This extension adjusts all images in posts so that they appear to be blurred for anyone not signed into the forum. It uses CSS blurring, so is trivial for anyone to work around it. The main use is to try and encourage pleople to register/sign in and hopefully, to interact.

It also hides the "search" bar on the main page for anyone that is not signed in, again through CSS styling.

Note that it requires a modification to the fof/upload resource template in order to set the class for any images that are visible through the UPL-PREVIEW mechanism. Update "vendor/fof/upload/resources/templates$ cat image-preview.blade.php" as follows:

    <img src="{@url}" title="{@base_name}" alt="{@base_name}" class="flarum-img"/>



