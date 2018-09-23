export const fetchAllComments = id => (
  $.ajax({
    method: 'GET',
    url: `api/comments`,
    data: { photo_id: id }
  })
);

export const createComment = formData => (
  $.ajax({
    method: 'POST',
    url: `api/comments`,
    data: formData
  })
);

export const deleteComment = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/comments/${id}`
  })
);