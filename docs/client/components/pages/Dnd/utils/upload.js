import superagent from 'superagent';

export default function mockUpload(data, success, failed, progress) {
  superagent.post('/upload')
    .accept('application/json')
    .send(data.formData)
    .on('progress', ({ percent }) => {
      progress(percent);
    })
    .end((err, res) => {
      if (err) {
        return failed(err);
      } return success(res.body.files, 'image');
    });
}
