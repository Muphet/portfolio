# Real-Estate CMS
<p>In-house developed CMS based on business requirements. It was built using Nuxt2 framework and packages like ckeditor, mapbox, chartJS, nuxt/image and several custom plugins.</p>
<p>App featured authentication with role-based permissions for users, sortable and filterable listings from various endpoints.</p>
<div class="flex w-full">
<img
    src="/listing.png"  
    class="mx-auto w-1/2"
/>
<img
    src="/editor1.png" 
    class="mx-auto w-1/2"
/>
</div>
<p>Images were uploaded to s3 bucket on AWS and they were sorted and prepared on client-side before uploading. I used `vuedraggable` package to handle manual sorting and additional settings per image to select cover photo or discard changes. Images were additionally optimized locally to reduce size.</p>
<img
    src="/editor2.png" 
    height="520" 
    class="mx-auto w-full"
/>
<p>For database we used `Supabase`, for error logging - `rollbar` and for testing - `cypress`.<p>