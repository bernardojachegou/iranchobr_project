const { register, batch } = require("../models");
const { handleCatchedError, date } = require("../utils");
const Yup = require("yup");

exports.get = async (req, res, next) => {
  try {
    const registers = await register.findAll();
    return res.json(registers);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// exports.findOne = async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const aRegister = await register.findAll({
//       where: {
//         id: id,
//       },
//     });
//     return res.json(aRegister);
//   } catch (error) {
//     res.status(500).json(error.message);
//   }
// };

exports.getByAnimalId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const aRegister = await register.findAll({
      include: [{ model: batch, required: true }],
      where: {
        fk_id_animal: id,
      },
    });
    return res.json(aRegister);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.post = async (req, res, next) => {
  try {
    const {
      fk_id_animal,
      fk_id_lote,
      dt_entrada,
      dt_saida,
      ic_bezerro,
    } = req.body;

    const data = {
      fk_id_animal,
      fk_id_lote,
      dt_entrada,
      dt_saida,
      dt_ultima_movimentacao: date(Date.now()).iso,
      ic_bezerro,
    };

    const schema = Yup.object().shape({
      fk_id_animal: Yup.number().required(),
      fk_id_lote: Yup.number().required(),
      dt_entrada: Yup.date().required(),
      dt_saida: Yup.date().required(),
      ic_bezerro: Yup.number().required(),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    const aRegister = await register.create(req.body);
    return res.json(aRegister);
  } catch (error) {
    handleCatchedError(res, error.message, 400);
  }
};

exports.put = async (req, res, next) => {
  try {
    const { id } = req.params;
    const aRegister = await register.findByPk(id);

    if (!aRegister) {
      return res.status(400).json({
        message: "Register not found!",
      });
    }

    const {
      fk_id_animal,
      fk_id_lote,
      dt_entrada,
      dt_saida,
      ic_bezerro,
    } = req.body;

    const data = {
      fk_id_animal,
      fk_id_lote,
      dt_entrada,
      dt_saida,
      dt_ultima_movimentacao: date(Date.now()).iso,
      ic_bezerro,
    };

    const schema = Yup.object().shape({
      fk_id_animal: Yup.number().required(),
      fk_id_lote: Yup.number().required(),
      dt_entrada: Yup.date().required(),
      dt_saida: Yup.date().required(),
      ic_bezerro: Yup.number().required(),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    await register.update(data, { where: { id } });
    return res.json({ updated: true });
  } catch (error) {
    handleCatchedError(res, error.message, 400);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const { id } = req.params;
    const aRegister = await register.findByPk(id);

    if (aRegister) {
      aRegister.destroy();
      return res.json({ deleted: true });
    }

    return res.status(400).json({
      deleted: false,
      message: "Entidade não encontrada.",
    });
  } catch (error) {
    handleCatchedError(res, error.message);
  }
};
