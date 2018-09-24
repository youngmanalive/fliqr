export const fetchAllComments = id => (
  $.ajax({
    method: 'GET',
    url: `api/comments`,
    data: { photo_id: id }
  })
);

export const createComment = comment => (
  $.ajax({
    method: 'POST',
    url: `api/comments`,
    data: { comment }
  })
);

export const deleteComment = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/comments/${id}`
  })
);