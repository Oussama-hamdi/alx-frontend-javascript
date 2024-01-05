import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const [photoRes, userRes] = await Promise.all([uploadPhoto(), createUser()]);
    return { photo: photoRes, userRes: user };
  } catch (err) {
    return { photo: null, user: null };
  }
}
