const { animal } = require("../models");
const { handleCatchedError, date } = require("../utils");
const Yup = require("yup");

exports.get = async (req, res, next) => {
  try {
    const animals = await animal.findAll();
    return res.json(animals);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.findOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const aAnimal = await animal.findAll({
      where: {
        id: id,
      },
    });
    return res.json(aAnimal);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.post = async (req, res, next) => {
  try {
    const {
      fk_id_pessoa,
      id_fazenda,
      no_animal,
      no_raca,
      sexo,
      vr_peso,
      dt_nascimento,
    } = req.body;

    const data = {
      fk_id_pessoa,
      id_fazenda,
      no_animal,
      no_raca,
      sexo,
      vr_peso,
      dt_nascimento,
    };

    const schema = Yup.object().shape({
      fk_id_pessoa: Yup.number().required(),
      id_fazenda: Yup.number().required(),
      no_animal: Yup.string().required(),
      no_raca: Yup.string().required(),
      sexo: Yup.string().required(),
      vr_peso: Yup.number().required(),
      dt_nascimento: Yup.date().required(),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    const aAnimal = await animal.create(req.body);
    return res.json(aAnimal);
  } catch (error) {
    handleCatchedError(res, error.message, 400);
  }
};

exports.put = async (req, res, next) => {
  try {
    const { id } = req.params;
    const aAnimal = await animal.findByPk(id);

    if (!aAnimal) {
      return res.status(400).json({
        message: "Animal not found!",
      });
    }

    const {
      fk_id_pessoa,
      id_fazenda,
      no_animal,
      no_raca,
      sexo,
      vr_peso,
      dt_nascimento,
    } = req.body;

    const data = {
      fk_id_pessoa,
      id_fazenda,
      no_animal,
      no_raca,
      sexo,
      vr_peso,
      dt_nascimento,
    };

    const schema = Yup.object().shape({
      fk_id_pessoa: Yup.number().required(),
      id_fazenda: Yup.number().required(),
      no_animal: Yup.string().required(),
      no_raca: Yup.string().required(),
      sexo: Yup.string().required(),
      vr_peso: Yup.number().required(),
      dt_nascimento: Yup.date().required(),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    await animal.update(data, { where: { id } });
    return res.json({ updated: true });
  } catch (error) {
    handleCatchedError(res, error.message, 400);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const { id } = req.params;
    const aAnimal = await animal.findByPk(id);

    if (aAnimal) {
      aAnimal.destroy();
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
