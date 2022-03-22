'use strict';

{
  const record = document.getElementById('record');
  const close = document.getElementById('close');
  const modal = document.getElementById('modal');
  const mask = document.getElementById('mask');
  const cancelModal = document.getElementById('cancel-modal');
  const loading = document.getElementById('loading')
  const cancelLoading = document.getElementById('cancel-loading')
  const finish = document.getElementById('finish')
  const cancelFinish = document.getElementById('cancel-finish')

  record.addEventListener('click', () =>{
    modal.classList.remove('hidden');
    mask.classList.remove('hidden');
  });
  mask.addEventListener('click', () =>{
    modal.classList.add('hidden');
    mask.classList.add('hidden');
  });
  cancelModal.addEventListener('click', () =>{
    modal.classList.add('hidden');
    mask.classList.add('hidden');
  });
  close.addEventListener('click', () =>{
    modal.classList.add('hidden');
    finish.classList.remove('hidden')
  });
  cancelFinish.addEventListener('click', () =>{
    finish.classList.add('hidden');
    mask.classList.add('hidden');
  })
}