const { animal } = require("../models");
const {
  handleCatchedError,
  getPagination,
  getPagingData,
} = require("../utils");
const Yup = require("yup");

exports.get = async (req, res, next) => {
  try {
    const animals = await animal.findAll();

    if (animals == 0) {
      return res.status(200).json({
        message: "The table is empty!",
      });
    }

    return res.status(200).json(animals);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.getAndCount = async (req, res, next) => {
  const { page, size } = req.query;
  const { limit, offset } = getPagination(page, size);
  try {
    await animal
      .findAndCountAll({
        limit,
        offset,
      })
      .then((data) => {
        const animals = getPagingData(data, page, limit);
        res.send(animals);
      });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.findOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const aAnimal = await animal.findByPk(id);

    if (!aAnimal) {
      return res.status(400).json({
        message: "Animal not found!",
      });
    }

    return res.status(200).json(aAnimal);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.post = async (req, res, next) => {
  try {
    const {
      fk_id_pessoa,
      no_fazenda,
      no_animal,
      no_raca,
      sexo,
      vr_peso,
      dt_nascimento,
    } = req.body;

    const data = {
      fk_id_pessoa,
      no_fazenda,
      no_animal,
      no_raca,
      sexo,
      vr_peso,
      dt_nascimento,
    };

    const schema = Yup.object().shape({
      fk_id_pessoa: Yup.number().required(),
      no_fazenda: Yup.string().required(),
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
    return res.status(201).json(aAnimal);
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
      no_fazenda,
      no_animal,
      no_raca,
      sexo,
      vr_peso,
      dt_nascimento,
    } = req.body;

    const data = {
      fk_id_pessoa,
      no_fazenda,
      no_animal,
      no_raca,
      sexo,
      vr_peso,
      dt_nascimento,
    };

    const schema = Yup.object().shape({
      fk_id_pessoa: Yup.number().required(),
      no_fazenda: Yup.string().required(),
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
    return res.status(200).json({ updated: true });
  } catch (error) {
    handleCatchedError(res, error.message, 400);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const { id } = req.params;
    const aAnimal = await animal.findByPk(id);

    if (!aAnimal) {
      return res.status(400).json({
        deleted: false,
        message: "Couldn't delete: Animal not found!",
      });
    }

    aAnimal.destroy();
    return res.status(200).json({ deleted: true });
  } catch (error) {
    handleCatchedError(res, error.message);
  }
};
