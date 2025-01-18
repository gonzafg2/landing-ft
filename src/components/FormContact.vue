<template>
  <form @submit.prevent="handleSubmit" class="space-y-6">
    <div>
      <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
      <input
        id="name"
        autocomplete="true"
        v-model="name"
        class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
      />
    </div>

    <div>
      <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
      <input
        id="email"
        type="email"
        autocomplete="true"
        v-model="email"
        class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
      />
    </div>

    <div>
      <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
      <textarea
        id="message"
        v-model="message"
        class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
      ></textarea>
    </div>

    <button type="submit" class="w-full py-3 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition">
      Enviar
    </button>
  </form>
</template>

<script setup>
import { ref } from 'vue';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const name = ref('');
const email = ref('');
const message = ref('');

const serviceId = 'service_yn7kzzn';
const templateId = 'template_j87itmk';
const userId = {
  publicKey: 'gUr0tjAmKzZrjHggL',
};

function handleSubmit() {
  const templateParams = {
    from_name: name.value,
    reply_to: email.value,
    message: message.value,
  };

  emailjs
    .send(serviceId, templateId, templateParams, userId)
    .then(() => {
      Swal.fire('Mensaje enviado', 'Tu mensaje ha sido enviado correctamente', 'success');
      name.value = '';
      email.value = '';
      message.value = '';
    })
    .catch(() => {
      Swal.fire('Error', 'Ha ocurrido un error al enviar el mensaje', 'error');
    });
}
</script>
