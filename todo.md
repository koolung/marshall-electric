1. make contact form functional with node mailer. smtp setting (id: "marshall-electric@bedfordwebservices.com" pw: ">f=NAMrJ.,[LAAT" smtp.titan.email) confirmation email to be sent to both the admin (info@bedfordwebservices.com) and the user submitting the form. the emails will have a html template with very modern styling that is identical to the website. at the very bottom of the email template is "Powered by <a href="www.bedfordwebservices.com">BWS</a>". include no promises with getting back on time.

2. implement google recaptcha v3 on the contact form (sitekey: "6Ld-3rUsAAAAAPRNxgsEXk1MnRF-VEZ0b_RWDQ_-" secret key="6Ld-3rUsAAAAAHz3Zkd_utmJYWDgUI0o6d4j26aq")

3. implement ga4 
```
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-NPF5HJHQMJ"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-NPF5HJHQMJ');
</script>
```

4. ./Services.tsx  clicking on images will also direct them to the corresponding pages

5. ./Contact.tsx modify hours to be 8-4 monday - friday

6. after the WhyUs.tsx, create a section that shows the 3 testimonials but google themed. add a button with google logo that says Find us on google

create env file to store all the credentials without example.
domain: marshallelectrichfx.com