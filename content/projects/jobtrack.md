# Jobtrack-AI
<p>Jobtrack is a simple open-source application I have created to keep track of companies I have applied to while looking for a job. I have opted to use GeminiAI API to process natural language and convert sentences into actions to manage my applications without the use of form. Due to additional cost of using OpenAI/GeminiAI this feature will be remade using wit.ai package that I am already working on.</p>

![jobtrack](/jobtrack.jpg)

<p>This project is built using Nuxt3 and composition API. It uses Pinia for global stage management and `pinia-persistedstate` to save listings locally. Additionally I am using nitro server (backend) to communicate with GeminiAI API and validate schema with `ZOD`.</p>
<p>I have further plans on developping this application and add CV generation or voice recognition features.</p>