import mongoose from "mongoose";

const inconSchema = new mongoose.Schema ({
    icon: String
})

const Icon = mongoose ("icon", inconSchema);

Icon.aggregate([
    {
      $group: {
        _id: null,
        id : null,
        icon : { $push: '$icones' }
      }
    }, (erro, result) => {
        if (erro) {
          console.error(erro);
        } else {
          console.log(result);
        }
      }
  ])

  export default Icon